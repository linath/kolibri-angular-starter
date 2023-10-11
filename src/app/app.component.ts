import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("radio") public radioElement: any;
  public radioValue : 'mine'|'all' = "mine";

  ngAfterViewInit(): void {
    this.radioValue = this.radioElement._value;
    this.radioElement._on = {
      onChange: (ev:Event, val:'mine'|'all') => {
        console.log("onChange", "new value:", val);
        this.radioValue = val;
      }
    }
  }
}
