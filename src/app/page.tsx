import TableScreen from "./tableScreen";
import { clerkClient } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function HomePage() {
  const user = await currentUser();
  if (user) {
    const userId = user.id;
    const userPrivateMetadata = (await clerkClient.users.getUser(userId))
      .privateMetadata;

    console.log(userId);
    console.log(userPrivateMetadata);

    if (userPrivateMetadata.is_test_account === undefined) {
      await clerkClient.users.updateUser(userId, {
        privateMetadata: { ...userPrivateMetadata, is_test_account: true },
      });
    }
  }

  return <TableScreen />;
}
