import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProfileCard } from './profile-card';
import { UpdatePasswordCard } from "./settings-card";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="grid w-full grid-cols-2 w-[400px]">
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="password">Alterar Senha</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
				<ProfileCard />
      </TabsContent>

      <TabsContent value="password">
				<UpdatePasswordCard/>
      </TabsContent>
    </Tabs>
  )
}
