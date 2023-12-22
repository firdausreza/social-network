import { CommonModule, provideImgixLoader } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./components/header/header.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { VideosComponent } from "./components/videos/videos.component";
import { VideocardComponent } from "./components/videos/videocard/videocard.component";
import { PeopleComponent } from "./components/people/people.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { ActivityComponent } from "./components/activity/activity.component";
import { ActivitycardComponent } from "./components/activity/activitycard/activitycard.component";
import { ChannelsComponent } from "./components/channels/channels.component";
import { ChannelcardComponent } from "./components/channels/channelcard/channelcard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FooterBreadcrumbsComponent } from "./components/footer/footer-breadcrumbs/footer-breadcrumbs.component";
import { PeoplecardComponent } from "./components/people/peoplecard/peoplecard.component";
import { DocumentCardComponent } from "./components/documents/document-card/document-card.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    VideosComponent,
    VideocardComponent,
    PeopleComponent,
    PeoplecardComponent,
    DocumentsComponent,
    DocumentCardComponent,
    ActivityComponent,
    ActivitycardComponent,
    ChannelsComponent,
    ChannelcardComponent,
    FooterComponent,
    FooterBreadcrumbsComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    NgxSkeletonLoaderModule.forRoot(),
    LazyLoadImageModule
  ],
  providers: [
    provideImgixLoader('https://source.unsplash.com/random/900x600')
  ],
  exports: [
    FontAwesomeModule,
    HeaderComponent,
    BreadcrumbsComponent,
    VideosComponent,
    VideocardComponent,
    PeopleComponent,
    PeoplecardComponent,
    DocumentsComponent,
    DocumentCardComponent,
    ActivityComponent,
    ActivitycardComponent,
    ChannelsComponent,
    ChannelcardComponent,
    FooterComponent,
    FooterBreadcrumbsComponent
  ]
})

export class SharedModule {}