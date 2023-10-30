import {
  Component,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  single: any[] = [
    {
      name: 'FirmaXYZ',
      value: 78000,
    },
    {
      name: 'testCompany',
      value: 94300,
    },
  ];
  view: any[number] | undefined;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.resizeChart();

    const resizeObserver = new ResizeObserver(() => {
      this.resizeChart();
    });

    resizeObserver.observe(this.element.nativeElement.parentElement);
  }

  resizeChart() {
    const parentElement = this.element.nativeElement.parentElement;
    const width = parentElement.offsetWidth;
    const height = parentElement.offsetHeight;

    this.view = [width, height];

    this.cdRef.detectChanges();
  }
}
