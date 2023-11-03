import { SpeechKit } from '@mastashake08/speech-kit'

class OcrTTS extends TextDetector {

    /**
     * @constructor 
     * @returns {OcrTTS} - returns a new instance of OcrTTS
     */
    constructor() {
        super()
        this.speech = new SpeechKit()
    }

    /**
     * @function readText
     * @param {Blob | ImageData | HTMLElement} image - ImageSource to perform OCR on. 
     * @returns {VoidFunction}
     */
    async readText(image) {
        try {
            const texts = await this.detect(image);
            texts.forEach(text => this.speech.speak(text));
          } catch (e) {
            console.error('Text detection failed:', e);
          }
    }
}

export {
    OcrTTS
}