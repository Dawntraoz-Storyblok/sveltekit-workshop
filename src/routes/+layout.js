import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Hero from '../components/Hero.svelte';
import Article from '../components/Article.svelte';
import AllArticles from '../components/AllArticles.svelte';
import PopularArticles from '../components/PopularArticles.svelte';
import Teaser from '../components/Teaser.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'ZGXIchoUYm0DdOu8iVRYGQtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			hero: Hero,
			article: Article,
			'all-articles': AllArticles,
			'popular-articles': PopularArticles,
		},
		https: true,
    apiOptions: {
      region: ''
    }
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
