export class NoteObj {
  noteLetter;
  stringPosition;
  frequency;
  isSelected;

  constructor(noteLetter, stringPosition) {
    this.noteLetter = noteLetter;
    this.stringPosition = stringPosition;
    this.isSelected = false;
    this.frequency = this.getFrequency();
  }

  getFrequency() {
    switch (this.stringPosition) {
      case 1:
        return 82.41;
      case 2:
        return 110.0;
      case 3:
        return 146.83;
      case 4:
        return 196.0;
      case 5:
        return 246.94;
      case 6:
        return 329.63;
      default:
        return 0;
    }
  }
}
