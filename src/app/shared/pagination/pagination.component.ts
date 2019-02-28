import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() take: number; // Amount of elements per page.
  @Input() showPageAmount: number; // Amount of max pages shown in pagination element.
  private _elementAmount: number; // Amount of elements present.

  page: number; // The current page.
  previousPage: number; // Previous page.
  nextPage: number; // Next page.
  lastPage: number; // Last page.
  showPages: number[]; // The pages shown in pagination element.

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updatePagination();
  }

  // Trigger elements update.
  @Input('elementAmount')
  set elementAmount(val: number) {
    this._elementAmount = val;
    this.updatePagination();
  }

  get elementAmount(): number {
    return this._elementAmount;
  }

  // Updates the parameter in the URL.
  public updateURLParameter(newPage: number) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute, // The route the parameter is added too.
        queryParams: { page: newPage }, // Add the page.
        queryParamsHandling: 'merge', // merge appends the parameter to already existing parameters.
      });
  }

  // Get the current page.
  public getPage(): number {
    return this.page;
  }

  public updatePagination() {
    // Initiate and reset pages shown in pagination element.
    this.showPages = [];

    // Get url parameter.
    this.activatedRoute.queryParams.subscribe(params => {
      const newPage = params['page']; // The page given from URL parameter.

      // If the page is set in URL.
      if (newPage !== undefined && newPage !== null && newPage !== '') {
        this.page = newPage; // Update current page.
        this.lastPage = Math.ceil(this.elementAmount * 1.0 / this.take * 1.0); // Calculate the last page.

        // If the current page is before 1, the user is redirectet to the first page.
        if (this.page < 1) {
          this.updateURLParameter(1);
        }
        // If the current page is after the last page, the user is redirectet to the last page.
        if (this.page > this.lastPage) {
          this.updateURLParameter(this.lastPage);
        }

        // Calculate previous page, if before page 1 it is set to 1.
        this.previousPage = this.page <= 1 ? 1 : (this.page * 1 - 1);
        // Calculate next page, if after last page it is set to the last page
        this.nextPage = this.page >= this.lastPage ? this.lastPage : (this.page * 1 + 1);

        // Calculate the amount of pages which the pagination element should show.
        const endShowPage = this.lastPage < this.showPageAmount ? this.lastPage : this.showPageAmount;
        this.showPageAmount = this.lastPage < this.showPageAmount ? this.lastPage : this.showPageAmount;
        // Calculate the start border.
        // If the page is less than this value, the normal amount of shown pages before should be less or none.
        const centerStartBorder = Math.floor(this.showPageAmount * 1.0 / 2.0);
        // Calculate the end border.
        // If the page is larger than this value, the normal amount of shown pages after should be less or none.
        let centerEndBorder = centerStartBorder + 2;
        // The end border will be before the end page if the lastpage is before the center.
        // In this case the end border should be the end page.
        centerEndBorder = centerEndBorder < endShowPage ? endShowPage : centerEndBorder;
        // Generate the page from the sum of the current page and iteration minus the distance to center.
        let showPage = (this.page * 1) - centerStartBorder;
        // In case the page is before the start border the positions are shifted right the distance.
        showPage = this.page <= centerStartBorder
          ? showPage + ((centerStartBorder + 1) - this.page * 1)
          : showPage;
        // In case the page is after the end border the positions are shifted left the distance from center.
        showPage = this.page > centerEndBorder - (this.showPageAmount % 2 === 1 ? 1 : 0) && endShowPage > 2
          ? showPage - (endShowPage - centerEndBorder)
          : showPage;
        showPage = this.page > this.lastPage * 1 - (centerStartBorder - (this.showPageAmount % 2 === 0 ? 1 : 0)) && endShowPage > 2
          ? showPage - (centerStartBorder - (this.showPageAmount % 2 === 0 ? 1 : 0) - (this.lastPage * 1 - this.page * 1))
          : showPage;
        // The page is added to the pagination element.
        // For loop to generate the pages shown.
        for (let i = 0; i < endShowPage; i++) {
          this.showPages[i] = showPage + i;
        }
      } else {
        // If page is not set in URL the page is set to 1.
        this.updateURLParameter(1);
      }
    });
  }
}
