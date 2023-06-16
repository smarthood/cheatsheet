import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent {
  code = { helo: "world" }
  dynamicForm!: FormGroup;
  getObj() {
    return JSON.stringify(this.code)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dynamicForm = new FormGroup({
      sections: new FormArray([
      ])
    })
    const jsonData: any = []; // Replace `yourJsonData` with the actual JSON data
    this.populateForm(jsonData);
  }

  get sections(): FormArray {
    return this.dynamicForm.get('sections') as FormArray;
  }

  getPageDataControls(section: FormGroup): FormArray {
    return section.get('details.pageData') as FormArray;
  }

  populateForm(jsonData: any[]) {
    jsonData.forEach((section) => {
      const sectionGroup = new FormGroup({
        sectionId: new FormControl(section.sectionId),
        sectionName: new FormControl(section.sectionName),
        isExistingComponent: new FormControl(section.isExistingComponent),
        sampleData: new FormControl(section.sampleData),
        details: new FormGroup({
          title: new FormControl(section.details.title),
          subtitle: new FormControl(section.details.subtitle),
          pageData: new FormArray([]),
        }),
      });

      if (section.details.pageData) {
        const pageDataArray = sectionGroup.get('details.pageData') as FormArray;
        section.details.pageData.forEach((pageData: any) => {
          const pageDataGroup = new FormGroup({
            image: new FormControl(pageData.image),
            color: new FormControl(pageData.color),
          });
          pageDataArray.push(pageDataGroup);
        });
      }

      this.sections.push(sectionGroup);
    });
  }
}

