module.exports = function(eleventyConfig) {
  // Statik kopyalar
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy("admin");

  // Çıktıyı _site klasörüne alalım (Eleventy varsayılanı)
  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
