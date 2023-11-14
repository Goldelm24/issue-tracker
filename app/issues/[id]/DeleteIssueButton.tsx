'use client';

import { AlertDialog, AlertDialogDescription, AlertDialogTrigger, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
const router = useRouter();

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
                <Button color='red' onClick={async() => {
                  await axios.delete('/api/issues/' + issueId);
                  router.push('/issues');
                  router.refresh()
                }}>Delete Issue</Button>
            </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
