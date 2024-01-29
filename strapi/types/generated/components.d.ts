import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    src: Attribute.String;
    alt: Attribute.String;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    text: Attribute.String;
  };
}

export interface CommonListItem extends Schema.Component {
  collectionName: 'components_common_list_items';
  info: {
    displayName: 'List_Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CommonList extends Schema.Component {
  collectionName: 'components_common_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'common.list-item', true>;
  };
}

export interface CommonTextSection extends Schema.Component {
  collectionName: 'components_common_text_sections';
  info: {
    displayName: 'Text_Section';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.image': CommonImage;
      'common.link': CommonLink;
      'common.list-item': CommonListItem;
      'common.list': CommonList;
      'common.text-section': CommonTextSection;
    }
  }
}
