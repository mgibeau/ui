/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Button from '../components/Button';

storiesOf(' Documentation', module).addWithInfo('Usage', ``, () => (
  <Page title="Usage" subTitle="How to use the UI Kit">
    <p>
      The UI Kit can be used by UX-designers and developers alike on their
      projects.
    </p>
    <h2>For Developers</h2>
    <h3>React</h3>
    <p>Importing the React components</p>
    <Blockquote title="Importing the MainNavigation" type="code">
      {`import { MainNavigation, MainNavigationItem } from '@wfp/ui';`}
    </Blockquote>
    <h3>CSS</h3>
    <p>You can import the whole css file into your application.</p>
    <Blockquote title="CDN" type="code">
      {`TODO: Show import from CDN`}
    </Blockquote>
    <h3>SCSS</h3>
    <p>
      When using scss you can also import the SCSS sources from the node_module.
      This allows you to use only parts of the SCSS, reuse common variables and
      functions from WFP-UI or to override settings.
    </p>
    <Blockquote title="Use Source scss" type="code">
      {`// Override settings
$input-border-radius: 5px;
$button-border-radius: 60px;
$button-font-size: 25px;
$button-padding: 10px 25px;
$color__main: #0076FF;

// Import all stylesheets
@import "../../node_modules/@wfp/ui/source/globals/scss/styles";

// Only import the Button stylesheet
@import "../../node_modules/@wfp/ui/source/components/Button/button";

// Only use variables
@import "../../node_modules/@wfp/ui/source/globals/scss/vars";`}
    </Blockquote>
    <h2>For Designers</h2>
    <p>
      Designers can use a Sketch libary containing the core visual styles,
      components and patterns.
    </p>
    <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Template.sketch?raw=true">
      WFP UI Template
    </Button>{' '}
    <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Logos.sketch?raw=true">
      Logos
    </Button>{' '}
    <Button href="https://github.com/wfp/ui/blob/next/sketch/WFP%20Favicons.sketch?raw=true">
      Favicons
    </Button>
  </Page>
));
