// create the TITLE section
const generateTitle = titleText => {
    if (!titleText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">${titleText}</h2>
      </section>
    `;
  };

// create the DESCRIPTION section
const generateDescription = descriptionText => {
    if (!descriptionText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">##Description</h2>
      <p>${descriptionText}</p>
      </section>
    `;
  };


// table of contents

// create the INSTALLATION section
const generateInstallation = installationText => {
    if (!installationText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">##Installation</h2>
      <p>${installationText}</p>
      </section>
    `;
  };

// create the USAGE section
const generateUsage = usageText => {
    if (!usageText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">##Usage</h2>
      <p>${usageText}</p>
      </section>
    `;
  };

// create the CONTRIBUTION section
const generateContribution = contributionText => {
    if (!contributionText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">##Contribution</h2>
      <p>${contributionText}</p>
      </section>
    `;
  };

  // create the TESTS section
const generateTests = testsText => {
    if (!testsText) {
      return '';
    }
  
    // instead of html, this needs to be markdown
    return `
      <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">##Tests</h2>
      <p>${testsText}</p>
      </section>
    `;
  };