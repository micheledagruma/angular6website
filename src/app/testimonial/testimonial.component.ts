import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private config: ConfigService) { }

  testimonials = {};
  ngOnInit() {
    this.testimonials = this.getIntro();
  }
  getIntro() {
    return this.config.getConfig().testimonials;
  }

}
