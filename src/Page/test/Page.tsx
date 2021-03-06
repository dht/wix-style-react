import * as React from 'react';
import Page from '..';
import { pageTestkitFactory } from '../../../testkit';
import { pageTestkitFactory as pageEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { pageTestkitFactory as pagePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function PageWithMandatoryProps() {
  return <Page />;
}

function PageWithAllProps() {
  return (
    <Page
      backgroundImageUrl=""
      className="cls"
      dataHook="hook"
      gradientClassName="cls"
      height="100px"
      maxWidth={200}
      minWidth={100}
      scrollableContentRef={_ref => {}}
      scrollProps={{ onScrollAreaChanged: () => {}, onScrollChanged: () => {} }}
      sidePadding={10}
      zIndex={2}
      horizontalScroll
    >
      <Page.Header className="cls" />
      <Page.Content fullScreen>asd</Page.Content>
      <Page.FixedContent>
        <span>asd</span>
      </Page.FixedContent>
      <Page.Tail>
        <span>asdads</span>
      </Page.Tail>
      <Page.Sticky>
        <span>asd</span>
      </Page.Sticky>
      <Page.Sticky>{({ className, style }) => <span>asd</span>}</Page.Sticky>
    </Page>
  );
}

async function testkits() {
  const testkit = pageTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = pageEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await pagePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
