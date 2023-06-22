import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent {
  dynamicForm!: FormGroup;
  display = "click generate to display!!!"
  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      sections: new FormArray([
      ])
    })
    this.createSection(1)
  }
  createSection(i: number) {
    (this.dynamicForm.get('sections') as FormArray).push(new FormGroup({
      sectionId: new FormControl(i),
      sectionName: new FormControl(null),
      isExistingComponent: new FormControl(true),
      details: new FormControl(null),
      selectorDetails: new FormControl(null),
      sampleData: new FormControl(null)
    }))
  }
  getControls() {
    return (this.dynamicForm.get('sections') as FormArray).controls
  }
  getControl(i: number) {
    return (this.dynamicForm.get('sections') as FormArray).controls[i]
  }
  convertStringToObject(details: string): any {
    const trimmedDetails = details.trim();
    const keyValuePairs = trimmedDetails.split(',');

    const obj: any = {};

    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split(':');
      const trimmedValue = value.replace(/"/g, '').trim();
      obj[key] = trimmedValue;
    });
    console.log(obj);

    (this.dynamicForm.get('sections') as FormArray).at(0).value['details'] = obj
  }
  getObj() {
    if ((this.dynamicForm.get('sections') as FormArray).at(0).value['details']) {
      this.convertStringToObject((this.dynamicForm.get('sections') as FormArray).at(0).value['details'])
    }
    this.display = JSON.stringify(this.dynamicForm.value['sections'], null, 2)
  }
  onEnterPressed(event: any): void {
    // Prevent the default behavior of the "Enter" key (e.g., line break)
    event.preventDefault();
    alert("Don't type in next line")
  }
}

