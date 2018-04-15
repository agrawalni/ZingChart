import { Component, OnInit, Input, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
declare var zingchart: any;
@Component({
  selector: 'app-zingchart',
  templateUrl: './zingchart.component.html',
  styleUrls: ['./zingchart.component.css']
})
export class ZingchartComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  public chart: any;
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => zingchart.render(this.chart));
  }

  ngOnDestroy(){
    zingchart.exec(this.chart.id, 'destroy');
  }

}
