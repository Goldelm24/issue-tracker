'use client';

import { AlertDialog, AlertDialogDescription, AlertDialogTrigger, Button, Flex } from '@radix-ui/themes';

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <AlertDialog.Root>
      <AlertDialogTrigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialogTrigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialogDescription>
            Are you sure you want to delete this issue? This action cannot be undone.
        </AlertDialogDescription>
        <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
                <Button variant="soft" color='gray'>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button color='red'>Delete Issue</Button>
            </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
