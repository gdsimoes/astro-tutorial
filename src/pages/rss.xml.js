import rss from "@astrojs/rss";

export const get = () =>
    rss({
        title: "Guilherme Dias Simoes | Blog",
        description: "My journey learning Astro",
        site: "https://astro-tutorial-gdsimoes.netlify.app",
        items: import.meta.glob("./**/*.md"),
        customData: `<language>en-us</language>`,
    });
