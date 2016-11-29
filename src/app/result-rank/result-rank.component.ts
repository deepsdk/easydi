import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as d3 from "d3";

import { Result } from "../result";

@Component({
  selector: 'app-result-rank',
  templateUrl: './result-rank.component.html',
  styleUrls: ['./result-rank.component.css']
})
export class ResultRankComponent implements OnInit {
  @ViewChild("canvas")
  canvas: ElementRef;

  constructor() { }

  ngOnInit() {
    d3.select(this.canvas.nativeElement)
      .append("text")
      .attr("x", 50)
      .attr("y", 100)
      .text("Hello, D3!");

    let data: Result[] = [
      {label: "a", score: 0.85},
      {label: "b", score: 0.12},
      {label: "c", score: 0.03},
      {label: "d", score: 0.01},
      {label: "e", score: 0.01},
    ];

    let x = d3.scaleLinear().range([0, 110]);
    let y = d3.scaleBand().range([100, 0]);

    console.log("dbg>data", data);
    data.sort((a,b) => a.score - b.score);
    console.log("dbg>data", data);

    let g = d3.select(this.canvas.nativeElement)
      .append("g");

    x.domain([0, d3.max(data, d => d.score)]);
    y.domain(data.map(d => d.label)).padding(0.1);

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.bandwidth())
        .attr("y", d => y(d.label))
        .attr("width", d => x(d.score));



//    let x = d3.scaleTime().range([0, 200]);
//    let y = d3.scaleLinear().range([180, 0]);
//    let valueline = d3.line()
//      .x((d: Result) => x(d.date))
//      .y((d: Result) => y(d.close));
//
//
//    let parse = d3.timeParse("%d-%b-%y");
//    let data: Result[] = [
//      {date: parse("1-May-12"), close: 58.13},
//      {date: parse("30-Apr-12"), close: 53.13},
//      {date: parse("27-Apr-12"), close: 67.13},
//      {date: parse("26-Apr-12"), close: 89.13},
//      {date: parse("25-Apr-12"), close: 99.13},
//    ];
//
//    d3.select(this.canvas.nativeElement)
//      .append("g")
//      .append("path")
//      .data([])
//      .attr("class", "line")
//      .attr("d", valueline);

  }

}
