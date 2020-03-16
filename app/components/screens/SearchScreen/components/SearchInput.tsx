import * as React from 'react';
import { Input } from 'react-native-elements';

import theme from 'app/config/theme';

type Props = {
  onChange: (text: string) => void;
};

const SearchInput = ({ onChange }: Props) => {
  return (
    <Input
      placeholder="Search Twitter"
      onChangeText={onChange}
      placeholderTextColor={theme.colors.text.gray}
      inputStyle={{ color: theme.colors.text.white }}
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        backgroundColor: theme.colors.backgroundSecondary,
        borderColor: theme.colors.backgroundSecondary,
      }}
    />
  );
};

export default SearchInput;
