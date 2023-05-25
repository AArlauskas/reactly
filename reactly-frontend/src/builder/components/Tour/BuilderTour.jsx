import Tour from "reactour";

const BuilderTour = ({ isOpen, onClose }) => {
  return (
    <Tour
      steps={[
        {
          content:
            "Welcome to the Builder Tour! This tour will show you how to use the Builder. Click the Next button to continue.",
        },
        {
          selector: ".blocklyToolboxContents",
          content:
            "This is the toolbox. Drag blocks from here to the workspace to build your program. Some of the categories have subcategories. Click on the category to expand it.",
        },
        {
          selector: ".toolbox-select",
          content:
            "This is the toolbox selector. You can select a different toolbox here. It will change the blocks available in the toolbox to filter down to the blocks you need.",
        },
        {
          selector: ".page-select",
          content:
            "This is the page selector. You can select a different page here. The selected page will be rendered in the preview window.",
        },
        {
          selector: ".builder-page__preview",
          content:
            "This is the preview window. The page you have selected will be rendered here. You can fully interact with the page here.",
        },
        {
          selector: ".full-screen-button",
          content:
            "This is the Full Screen button. You can use it to expand the preview window to full screen.",
        },
        {
          selector: ".code-button",
          content:
            "This is the code button. You can use it to view the code generated by the blocks in the workspace.",
        },
        {
          selector: ".theme-settings-button",
          content:
            "This is the general settings button. You can set your website's theme here.",
        },
        {
          selector: ".download-button",
          content:
            "This is the project download button. You can use it to download your project as a zip file and run it on your local machine.",
        },
        {
          selector: ".MuiFab-sizeLarge",
          content:
            "Here are the extra features. You can create custom CSS rules and JS functions. You can also use ChatGPT to generate text for your page.",
        },
        {
          selector: ".MuiFab-root:nth-child(1)",
          content:
            "This is the Go Back button. Whenever you are done with creating the page and want to preserve your work, click this button to go back to the previous page.",
        },
        {
          selector: ".tour-button",
          content:
            "This is the tour button. You can use it to start the tour again.",
        },
        {
          content:
            "That's it! You have completed the tour. Click the Close button to close the tour.",
        },
      ]}
      isOpen={isOpen}
      onRequestClose={onClose}
    />
  );
};

export default BuilderTour;
