'use client';

import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign...'>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="1">Josias Guzman</Select.Item>
            </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  )
}

export default AssigneSelect
