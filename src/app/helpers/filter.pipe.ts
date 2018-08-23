import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(videos: any[], filter: Object): any {
    if (!videos || !filter) {
        return videos;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return videos.filter(
      category => category.category.indexOf(filter) !== -1
    );
}

}
