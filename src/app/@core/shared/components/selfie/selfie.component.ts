import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  Component,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import Webcam from 'webcam-easy';
import { BlurDetectionService } from './../../services/utility/blur-detection.service';
// import { NotificationService } from '../../services/notification.service';
@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.css'],
})
export class SelfieComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const container = document.querySelector('.container') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;
    const FACE_WIDTH = 300;
    const FACE_DEVIATION = 40;

    const facePositions = {
      isLookUp: document.querySelector('.face-position__direction_top'),
      isLookRight: document.querySelector('.face-position__direction_left'),
      isLookDown: document.querySelector('.face-position__direction_bottom'),
      isLookLeft: document.querySelector('.face-position__direction_right'),
    };

    if (container) {
      // const selfie = new Selfie({
      //   container,
      //   onFaceFrameProcessed: ({ getFace }) => {
      //     const face: Face = getFace();
      //     if (face) {
      //       const faceWidth = face.getWidth();
      //       const deviationFaceWidth = Math.abs(FACE_WIDTH - faceWidth);
      //       const deviationFacePosition = face.getFacePosiotion();
      //       const overlayVisible =
      //         deviationFaceWidth > FACE_DEVIATION ||
      //         deviationFacePosition > FACE_DEVIATION;
      //       if (overlayVisible) {
      //         overlay?.classList.add('overlay_visible');
      //       } else {
      //         overlay?.classList.remove('overlay_visible');
      //       }
      //     }
      //     for (const key in facePositions) {
      //       const direction = key as keyof typeof facePositions;
      //       if (face.direction[direction]()) {
      //         facePositions[direction]?.classList.add(
      //           'face-position__direction_visible'
      //         );
      //       } else {
      //         facePositions[direction]?.classList.remove(
      //           'face-position__direction_visible'
      //         );
      //       }
      //     }
      //   },
      // });
    }
  }
}
