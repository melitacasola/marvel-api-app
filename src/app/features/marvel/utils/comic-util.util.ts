import { IComics } from "../../../core/interfaces/comics.interface";

export function ImageUtilUrl(comic: IComics): string | undefined {
  if (comic?.thumbnail) {
    const { path, extension } = comic.thumbnail;
    return `${path}.${extension}`;
  }
  return undefined;

}

export function ComicUtilPrice(comic: IComics): number | undefined {
  if(comic?.prices.length){
    const { type, price } = comic.prices[0];
    return price;
  }
  return undefined;
}

export function ComicUtilDate(comic: IComics): string | undefined {
  if(comic?.dates.length){
    const { type, date } = comic.dates[0];
    return date;
  }
  return undefined;
}

export function ComicUtilCreators(comic: IComics): string | undefined {
  if(comic?.creators.items.length){
    return comic.creators.items.map(creator => creator.name).join(', ');
  }
  return undefined;
}
