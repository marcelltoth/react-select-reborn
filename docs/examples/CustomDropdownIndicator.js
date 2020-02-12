// @flow

import React, { type ElementConfig } from 'react';
import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components } from 'react-select-reborn';
import { colourOptions } from '../data';

const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <EmojiIcon primaryColor={colourOptions[2].color} />
    </components.DropdownIndicator>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ DropdownIndicator }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
