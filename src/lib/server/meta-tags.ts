export function generateMetaTags(data: any) {
  return {
    title: data?.title || 'Kite News',
    description: data?.description || 'News aggregation by Kagi',
  };
}