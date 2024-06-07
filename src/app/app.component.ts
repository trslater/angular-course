import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [CourseCardComponent],
})
export class AppComponent {
  courses: Course[] = COURSES;

  doThing(course: Course) {
    console.log(course);
  }
}
