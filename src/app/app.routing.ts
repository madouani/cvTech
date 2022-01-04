import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DeleteCvComponent } from "./delete-cv/delete-cv.component";
import { DetailComponent } from "./detail/detail.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTING: Routes =[

  {path: 'cv', children:[
      {path: '',component: CvComponent},
      {path: 'delete/:id',component: DeleteCvComponent},
      {path: 'add',component: AddCvComponent},
      {path: ':id', component: DetailComponent}
  ]
  },
  {path: 'login',component: LoginComponent},
  {path: '',component: CvComponent},
  {path: '**',component: ErrorComponent}
]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
