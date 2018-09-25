import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  @Input('appSearch') searchDataSource: string[] = [];
  private ulElem: HTMLElement; // выпадающий список <ul>...</ul>

  constructor(private element: ElementRef) {
    // создаем выпадающий список
    this.ulElem = document.createElement('ul');
    this.ulElem.className = 'ul-search-list';
    this.ulElem.style.display = 'none';
    this.insertAfter(this.ulElem, this.element.nativeElement.parentElement);
  }

  insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }

  @HostListener("input") onInput() {
    let li: HTMLLIElement;
    let val: string;
    this.ulElem.innerHTML = '';

    let dataFiltered: string[] = this.searchDataSource.filter((item: string) => {
      val = this.element.nativeElement.value;
      return !!val && item.includes(val)
    });

    // если результат фильтра не пуст - отбразить выпадающий список, вставив в него элементы
    if (dataFiltered.length > 0) {
      dataFiltered.forEach(item => {
        li = document.createElement('li');
        li.innerText = item;
        this.ulElem.appendChild(li);
      });
      this.ulElem.style.display = 'block';
    } else {
      // спрятать выпадающий список, если пусто
      this.ulElem.style.display = 'none';
    }
  }

}
