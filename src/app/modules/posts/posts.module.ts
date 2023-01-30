import { NgModule } from "@angular/core";
import { ListOfPostsComponent } from './components/list-of-posts/list-of-posts.component';

@NgModule({
    declarations: [
        ListOfPostsComponent
    ],
    imports: [],
    exports: [],
    bootstrap: [ListOfPostsComponent]
})
export class PostsModule { }