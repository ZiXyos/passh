import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import EntityItem from "../services/storage/entities/items.entity";

type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
}

type RootStackScreenProps<
    Screen extends keyof RootStackParamList
> = NativeStackScreenProps< RootStackParamList, Screen>;

type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Manager: { items: EntityItem };
    AddPass: undefined;
};

type RootTabScreenProps<
    Screen extends keyof RootTabParamList
> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;

export {
    RootStackParamList,
    RootStackScreenProps,
    RootTabParamList,
    RootTabScreenProps
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
