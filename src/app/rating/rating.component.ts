import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-rating-decimal',
	standalone: true,
	imports: [NgbRatingModule],
	templateUrl: '/src/app/rating/rating.component.html',
	styles: `
			i {
				position: relative;
				display: inline-block;
				font-size: 2.5rem;
				padding-right: 0.1rem;
				color: #0f0000;
			}

			.filled {
				color: red;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}
		`,
})
export class NgbdRatingDecimal {
  @Input()rating!:any

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
