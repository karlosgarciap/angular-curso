import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {

    if (!images) {
      return 'https://techcrunch.com/wp-content/uploads/2018/02/spotify-money.png?w=1390&crop=1';
    }
    if (images.length > 0) {
      return images[0].url;
    }
    return null;
  }

}
