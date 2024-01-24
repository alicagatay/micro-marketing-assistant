"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "/showCurrentUser/api",
    fetcher,
  ) as {
    data: {
      id: string;
      passwordEnabled: boolean;
      totpEnabled: boolean;
      backupCodeEnabled: boolean;
      twoFactorEnabled: boolean;
      banned: boolean;
      createdAt: number;
      updatedAt: number;
      imageUrl: string;
      hasImage: boolean;
      primaryEmailAddressId: string;
      primaryPhoneNumberId: string;
      primaryWeb3WalletId: string;
      lastSignInAt: number;
      externalId: string;
      username: string;
      firstName: string;
      lastName: string;
      publicMetadata: object;
      privateMetadata: object;
      unsafeMetadata: object;
      emailAddresses: [
        {
          id: string;
          emailAddress: string;
          verification: {
            status: string;
            strategy: string;
            externalVerificationRedirectURL: string;
            attempts: null;
            expireAt: null;
            nonce: null;
          };
          linkedTo: [];
        },
      ];
      phoneNumbers: [];
      web3Wallets: [];
      externalAccounts: [];
      createOrganizationEnabled: true;
    };
    error: boolean;
    isLoading: boolean;
  };

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-4xl">Error</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-4xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-4xl">Current logged in user is: {data.username}</div>
    </div>
  );
}
