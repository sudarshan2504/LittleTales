/**
 * Web Speech API narration wrapper with fallback detection and child-friendly speech rate.
 */

export const isSpeechSynthesisSupported = () => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
};

let currentUtterance = null;

export const speakSceneNarration = (text, { onStart, onEnd, onError } = {}) => {
  if (!isSpeechSynthesisSupported()) {
    if (onError) onError(new Error('Speech synthesis not supported in this browser'));
    return false;
  }

  try {
    // Cancel any previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    currentUtterance = utterance;

    // Child-friendly settings: slightly slower, pleasant pitch
    utterance.rate = 0.88;
    utterance.pitch = 1.05;

    // Attempt to pick a clear English voice if available
    const voices = window.speechSynthesis.getVoices();
    const friendlyVoice = voices.find(
      v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Zira')))
    ) || voices.find(v => v.lang.startsWith('en'));

    if (friendlyVoice) {
      utterance.voice = friendlyVoice;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      // If error was just caused by manual cancel/interruption, don't trigger loud error
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('SpeechSynthesis error:', e);
        if (onError) onError(e);
      }
      currentUtterance = null;
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Error initiating speech synthesis:', err);
    if (onError) onError(err);
    return false;
  }
};

export const pauseNarration = () => {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.pause();
    } catch (e) {
      console.warn('Speech pause error', e);
    }
  }
};

export const resumeNarration = () => {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.resume();
    } catch (e) {
      console.warn('Speech resume error', e);
    }
  }
};

export const stopNarration = () => {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.cancel();
      currentUtterance = null;
    } catch (e) {
      console.warn('Speech stop error', e);
    }
  }
};
