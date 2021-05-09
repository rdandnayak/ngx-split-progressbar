[![CI](https://github.com/rdandnayak/ngx-split-progressbar/actions/workflows/main.yml/badge.svg)](https://github.com/rdandnayak/ngx-split-progressbar/actions/workflows/main.yml)

# Introduction

This component allow you to manage a progress visually with split slots like
shown in below image

![image](https://user-images.githubusercontent.com/816239/117569993-f509ed80-b0e5-11eb-91d5-99dc5c92fe0a.png)


## installation

Type the following command to install the package:
```angular2html
npm install ngx-split-progressbar@latest
```

Then you need to import it into your app modules
```angular2html
import { NgxSplitProgressbarModule } from "ngx-split-progrssbar"

@NgModule({
  imports: [
    NgxSplitProgressbarModule
  ]
})
```

## How to use
Include the component in below format
```angular2html
<lib-ngx-split-progressbar 
  [data]="[
    { name: 'Slot one', color: '#AEC6F4', weightage: 20 },
    { name: 'Slot two', color: '#C5C9E5', weightage: 20 },
    { name: 'Slot three', color: '#BBDBCE', weightage: 20 },
    { name: 'Slot four', color: '#F8E6A6', weightage: 40 },
  ]">
</lib-ngx-split-progressbar>
```
