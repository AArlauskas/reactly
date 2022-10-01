function generateThemeFile(theme) {
  const code = [];
  code.push("const websiteTheme =");
  code.push(JSON.stringify(theme, null, 2));
  code.push("");
  code.push("export default websiteTheme;");
  return code.join("\n");
}

export { generateThemeFile };
