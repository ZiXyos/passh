import { ContainerView, Typography } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfilePage() {

  const inset = useSafeAreaInsets();
  return (
    <ContainerView style={{ paddingTop: inset.top }}>
      <Typography>Profile Page </Typography>
    </ContainerView>
  )
}
