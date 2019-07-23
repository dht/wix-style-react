/* eslint-disable */
/* tslint:disable */
/*
 * DO NOT EDIT THIS FILE!
 * YOUR CHANGES WILL BE OVERWRITTEN!
 * FILE IS BASED ON .wuf/testkits/puppeteer.template.ejs
 * AND GENERATED BY `wuf export-teskits`
 */
import 'regenerator-runtime/runtime';
import {
  puppeteerTestkitFactoryCreator,
  puppeteerUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/puppeteer';

import tooltipDriverFactory from '../src/Tooltip/Tooltip.puppeteer.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = puppeteerTestkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = puppeteerUniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);

import accordionDriverFactory from '../src/Accordion/Accordion.uni.driver';

export const accordionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  accordionDriverFactory,
);

import { addItemUniDriverFactory } from '../src/AddItem/AddItem.uni.driver';

export const addItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  addItemUniDriverFactory,
);

import { autoCompleteUniDriverFactory } from '../src/AutoComplete/AutoComplete.uni.driver';

export const autoCompleteTestkitFactory = puppeteerUniTestkitFactoryCreator(
  autoCompleteUniDriverFactory,
);

import { avatarUniDriverFactory } from '../src/Avatar/Avatar.uni.driver';

export const avatarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  avatarUniDriverFactory,
);

import { badgeUniDriverFactory } from '../src/Badge/Badge.uni.driver';

export const badgeTestkitFactory = puppeteerUniTestkitFactoryCreator(
  badgeUniDriverFactory,
);

import { BoxDriver } from '../src/Box/Box.uni.driver';

export const boxTestkitFactory = puppeteerUniTestkitFactoryCreator(
  BoxDriver,
);

import { breadcrumbsUniDriverFactory } from '../src/Breadcrumbs/Breadcrumbs.uni.driver';

export const breadcrumbsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  breadcrumbsUniDriverFactory,
);

import { buttonDriverFactory } from '../src/Button/Button.uni.driver';

export const buttonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  buttonDriverFactory,
);

import { calendarUniDriverFactory } from '../src/Calendar/Calendar.uni.driver';

export const calendarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarUniDriverFactory,
);

import { calendarPanelUniDriverFactory } from '../src/CalendarPanel/CalendarPanel.uni.driver';

export const calendarPanelTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarPanelUniDriverFactory,
);

import { calendarPanelFooterDriverFactory } from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';

export const calendarPanelFooterTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarPanelFooterDriverFactory,
);

import cardGalleryItemDriverFactory from '../src/CardGalleryItem/CardGalleryItem.uni.driver';

export const cardGalleryItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  cardGalleryItemDriverFactory,
);

import { carouselUniDriverFactory } from '../src/Carousel/Carousel.uni.driver';

export const carouselTestkitFactory = puppeteerUniTestkitFactoryCreator(
  carouselUniDriverFactory,
);

import { checkboxUniDriverFactory } from '../src/Checkbox/Checkbox.uni.driver';

export const checkboxTestkitFactory = puppeteerUniTestkitFactoryCreator(
  checkboxUniDriverFactory,
);

import { circularProgressBarDriverFactory } from '../src/CircularProgressBar/CircularProgressBar.uni.driver';

export const circularProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  circularProgressBarDriverFactory,
);

import { closeButtonDriverFactory } from '../src/CloseButton/CloseButton.uni.driver';

export const closeButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  closeButtonDriverFactory,
);

import { colorInputDriverFactory } from '../src/ColorInput/ColorInput.uni.driver';

export const colorInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  colorInputDriverFactory,
);

import { contactItemBuilderUniDriverFactory } from '../src/ContactItemBuilder/ContactItemBuilder.uni.driver';

export const contactItemBuilderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  contactItemBuilderUniDriverFactory,
);

import { dataTableUniDriverFactory } from '../src/DataTable/DataTable.uni.driver';

export const dataTableTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dataTableUniDriverFactory,
);

import { dateInputDriverFactory } from '../src/DateInput/DateInput.uni.driver';

export const dateInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dateInputDriverFactory,
);

import { dropdownUniDriverFactory } from '../src/Dropdown/Dropdown.uni.driver';

export const dropdownTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownUniDriverFactory,
);

import { dropdownBaseDriverFactory } from '../src/DropdownBase/DropdownBase.uni.driver';

export const dropdownBaseTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownBaseDriverFactory,
);

import { dropdownLayoutDriverFactory } from '../src/DropdownLayout/DropdownLayout.uni.driver';

export const dropdownLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownLayoutDriverFactory,
);

import { editableSelectorUniDriverFactory } from '../src/EditableSelector/EditableSelector.uni.driver';

export const editableSelectorTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableSelectorUniDriverFactory,
);

import { editableTitleUniDriverFactory } from '../src/EditableTitle/EditableTitle.uni.driver';

export const editableTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableTitleUniDriverFactory,
);

import { emptyStateUniDriverFactory } from '../src/EmptyState/EmptyState.uni.driver';

export const emptyStateTestkitFactory = puppeteerUniTestkitFactoryCreator(
  emptyStateUniDriverFactory,
);

import { errorIndicatorDriverFactory } from '../src/ErrorIndicator/ErrorIndicator.uni.driver';

export const errorIndicatorTestkitFactory = puppeteerUniTestkitFactoryCreator(
  errorIndicatorDriverFactory,
);

import { floatingNotificationDriverFactory } from '../src/FloatingNotification/FloatingNotification.uni.driver';

export const floatingNotificationTestkitFactory = puppeteerUniTestkitFactoryCreator(
  floatingNotificationDriverFactory,
);

import formFieldDriverFactory from '../src/FormField/FormField.puppeteer.driver';

export const formFieldTestkitFactory = puppeteerTestkitFactoryCreator(
  formFieldDriverFactory,
);

import { genericModalLayoutUniDriverFactory } from '../src/GenericModalLayout/GenericModalLayout.uni.driver';

export const genericModalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  genericModalLayoutUniDriverFactory,
);

import { googlePreviewDriverFactory } from '../src/GooglePreview/GooglePreview.uni.driver';

export const googlePreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  googlePreviewDriverFactory,
);

import headingDriverFactory from '../src/Heading/Heading.puppeteer.driver';

export const headingTestkitFactory = puppeteerTestkitFactoryCreator(
  headingDriverFactory,
);

import { iconButtonDriverFactory } from '../src/IconButton/IconButton.uni.driver';

export const iconButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  iconButtonDriverFactory,
);

import { imageViewerUniDriverFactory } from '../src/ImageViewer/ImageViewer.uni.driver';

export const imageViewerTestkitFactory = puppeteerUniTestkitFactoryCreator(
  imageViewerUniDriverFactory,
);

import inputDriverFactory from '../src/Input/Input.uni.driver';

export const inputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  inputDriverFactory,
);

import { inputAreaUniDriverFactory } from '../src/InputArea/InputArea.uni.driver';

export const inputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(
  inputAreaUniDriverFactory,
);

import { inputWithOptionsUniDriverFactory } from '../src/InputWithOptions/InputWithOptions.uni.driver';

export const inputWithOptionsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  inputWithOptionsUniDriverFactory,
);

import { linearProgressBarDriverFactory } from '../src/LinearProgressBar/LinearProgressBar.uni.driver';

export const linearProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  linearProgressBarDriverFactory,
);

import { ListItemActionDriverFactory } from '../src/ListItemAction/ListItemAction.uni.driver';

export const ListItemActionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  ListItemActionDriverFactory,
);

import { loaderUniDriverFactory } from '../src/Loader/Loader.uni.driver';

export const loaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  loaderUniDriverFactory,
);

import { modalUniDriverFactory } from '../src/Modal/Modal.uni.driver';

export const modalTestkitFactory = puppeteerUniTestkitFactoryCreator(
  modalUniDriverFactory,
);

import { multiselectUniDriverFactory } from '../src/MultiSelect/MultiSelect.uni.driver';

export const multiSelectTestkitFactory = puppeteerUniTestkitFactoryCreator(
  multiselectUniDriverFactory,
);

import { multiSelectCheckboxUniDriverFactory } from '../src/MultiSelectCheckbox/MultiSelectCheckbox.uni.driver';

export const multiSelectCheckboxTestkitFactory = puppeteerUniTestkitFactoryCreator(
  multiSelectCheckboxUniDriverFactory,
);

import { noBorderInputDriverFactory } from '../src/NoBorderInput/NoBorderInput.puppeteer.driver';

export const noBorderInputTestkitFactory = puppeteerTestkitFactoryCreator(
  noBorderInputDriverFactory,
);

import { notificationUniDriverFactory } from '../src/Notification/Notification.uni.driver';

export const notificationTestkitFactory = puppeteerUniTestkitFactoryCreator(
  notificationUniDriverFactory,
);

import { numberInputDriverFactory } from '../src/NumberInput/NumberInput.uni.driver';

export const numberInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  numberInputDriverFactory,
);

import { pageHeaderUniDriverFactory } from '../src/PageHeader/PageHeader.uni.driver';

export const pageHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  pageHeaderUniDriverFactory,
);

import { proportionDriverFactory } from '../src/Proportion/Proportion.uni.driver';

export const proportionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  proportionDriverFactory,
);

import richTextInputAreaDriverFactory from '../src/RichTextInputArea/RichTextInputArea.uni.driver';

export const richTextInputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(
  richTextInputAreaDriverFactory,
);

import { searchUniDriverFactory } from '../src/Search/Search.uni.driver';

export const searchTestkitFactory = puppeteerUniTestkitFactoryCreator(
  searchUniDriverFactory,
);

import { sectionHelperUniDriverFactory } from '../src/SectionHelper/SectionHelper.uni.driver';

export const sectionHelperTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sectionHelperUniDriverFactory,
);

import { segmentedToggleDriverFactory } from '../src/SegmentedToggle/SegmentedToggle.uni.driver';

export const segmentedToggleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  segmentedToggleDriverFactory,
);

import { sidebarDriverFactory } from '../src/Sidebar/Sidebar.uni.driver';

export const sidebarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarDriverFactory,
);

import { sidebarSectionTitleDriverFactory } from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';

export const sidebarSectionTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarSectionTitleDriverFactory,
);

import { sliderUniDriverFactory } from '../src/Slider/Slider.uni.driver';

export const sliderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sliderUniDriverFactory,
);

import { socialPreviewDriverFactory } from '../src/SocialPreview/SocialPreview.uni.driver';

export const socialPreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  socialPreviewDriverFactory,
);

import { statsWidgetUniDriverFactory } from '../src/StatsWidget/StatsWidget.uni.driver';

export const statsWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(
  statsWidgetUniDriverFactory,
);

import { stepperDriverFactory } from '../src/Stepper/Stepper.uni.driver';

export const stepperTestkitFactory = puppeteerUniTestkitFactoryCreator(
  stepperDriverFactory,
);

import { swatchesDriverFactory } from '../src/Swatches/Swatches.uni.driver';

export const swatchesTestkitFactory = puppeteerUniTestkitFactoryCreator(
  swatchesDriverFactory,
);

import tableDriverFactory from '../src/Table/Table.puppeteer.driver';

export const tableTestkitFactory = puppeteerTestkitFactoryCreator(
  tableDriverFactory,
);

import { tabsUniDriverFactory } from '../src/Tabs/Tabs.uni.driver';

export const tabsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  tabsUniDriverFactory,
);

import { tagUniDriverFactory } from '../src/Tag/Tag.uni.driver';

export const tagTestkitFactory = puppeteerUniTestkitFactoryCreator(
  tagUniDriverFactory,
);

import textDriverFactory from '../src/Text/Text.puppeteer.driver';

export const textTestkitFactory = puppeteerTestkitFactoryCreator(
  textDriverFactory,
);

import { textButtonDriverFactory } from '../src/TextButton/TextButton.uni.driver';

export const textButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  textButtonDriverFactory,
);

import { thumbnailDriverFactory } from '../src/Thumbnail/Thumbnail.uni.driver';

export const thumbnailTestkitFactory = puppeteerUniTestkitFactoryCreator(
  thumbnailDriverFactory,
);

import { timeInputUniDriverFactory } from '../src/TimeInput/TimeInput.uni.driver';

export const timeInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  timeInputUniDriverFactory,
);

import { sidebarSectionItemDriverFactory } from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';

export const sidebarSectionItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarSectionItemDriverFactory,
);

import { sidebarDividerDriverFactory } from '../src/SidebarDivider/SidebarDivider.uni.driver';

export const sidebarDividerTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarDividerDriverFactory,
);

import { sidebarHeaderDriverFactory } from '../src/SidebarHeader/SidebarHeader.uni.driver';

export const sidebarHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarHeaderDriverFactory,
);

import { drillViewUniDriverFactory } from '../src/SideMenu/DrillView/DrillView.uni.driver';

export const drillViewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  drillViewUniDriverFactory,
);

import { headerUniDriverFactory } from '../src/Card/Header/Header.uni.driver';

export const cardHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  headerUniDriverFactory,
);

import { sideMenuUniDriverFactory } from '../src/SideMenu/core/SideMenu.uni.driver';

export const sideMenuTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sideMenuUniDriverFactory,
);

import { editableRowUniDriverFactory } from '../src/EditableSelector/EditableRow/EditableRow.uni.driver';

export const editableRowTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableRowUniDriverFactory,
);

import { messageBoxMarketerialLayoutUniDriverFactory } from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver';

export const messageBoxMarketerialLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  messageBoxMarketerialLayoutUniDriverFactory,
);

import { MessageBoxFunctionalLayoutUniDriverFactory } from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver';

export const messageBoxFunctionalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  MessageBoxFunctionalLayoutUniDriverFactory,
);

import { cardSubheaderDriverFactory } from '../src/Card/Subheader/Subheader.uni.driver';

export const subheaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  cardSubheaderDriverFactory,
);

