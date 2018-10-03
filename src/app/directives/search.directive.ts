import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  private ulElem: HTMLElement; // выпадающий список <ul>...</ul>

  constructor(private dataService: DataService, private element: ElementRef) {
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

    let dataFiltered = this.dataService.todos.map(item => item.name).filter((item: string) => {
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
