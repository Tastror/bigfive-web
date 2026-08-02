'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/table';
import {
  DeleteIcon,
  EditIcon,
  PersonIcon,
  ResultIcon
} from '@/components/icons';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { base64url, formatId, validId } from '@/lib/helpers';
import { useRouter } from '@/navigation';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal';

interface CompareProps {
  addPersonText: string;
  comparePeopleText: string;
  nameText: string;
  emptyText: string;
  closeText: string;
  saveText: string;
  paramId?: string;
}

export const ComparePeople = ({
  addPersonText,
  comparePeopleText,
  nameText,
  emptyText,
  closeText,
  saveText,
  paramId
}: CompareProps) => {
  const router = useRouter();
  const columns = [
    {
      key: 'name',
      label: nameText
    },
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'actions',
      label: 'ACTIONS'
    }
  ];

  type Row = {
    id: string;
    name: string;
  };
  const [rows, setRows] = useState<Row[]>([]);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState(paramId ?? '');

  const [editName, setEditName] = useState<string>('');
  const [editId, setEditId] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isInvalidId = React.useMemo(() => {
    if (id === '') return false;

    const newId = formatId(id);
    if (rows.some((item) => item.id === newId)) return true;

    return !validId(newId);
  }, [id, rows]);

  const isInvalidEditId = React.useMemo(() => {
    if (editId === '') return false;

    const newId = formatId(editId);
    return !validId(newId);
  }, [editId]);

  function deleteItem(id: string) {
    setRows((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function addPerson() {
    const newId = formatId(id);
    if (name && id && !isInvalidId) {
      setRows((prev) => {
        return [...prev, { id: newId, name }];
      });
      setName('');
      setId('');
    }
  }

  function comparePeople() {
    const urlParam = base64url.encode(JSON.stringify(rows));
    router.push(`/compare/${urlParam}`);
  }

  function onOpenEditPerson(onOpen: () => void, item: Row) {
    setEditName(item.name);
    setEditId(item.id);
    setEditIndex(rows.findIndex(({ id }) => id === item.id));
    onOpen();
  }

  function editPerson(onClose: () => void) {
    const newId = formatId(editId);
    if (editName && editId && !isInvalidEditId && editIndex !== undefined) {
      setRows((prev) => {
        const updatedRows = [...prev];
        updatedRows[editIndex] = { id: newId, name: editName };
        return updatedRows;
      });
      setEditName('');
      setEditId('');
      setEditIndex(undefined);
      onClose();
    }
  }

  return (
    <div className='w-full flex flex-col gap-4 mt-4'>
      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end md:mb-2'>
        <Input
          type='text'
          label={nameText}
          autoFocus
          labelPlacement='outside'
          placeholder='Arthur Dent'
          startContent={
            <PersonIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          value={name}
          onValueChange={setName}
        />
        <Input
          type='text'
          label='ID'
          labelPlacement='outside'
          placeholder='58a70606a835c400c8b38e84'
          startContent={
            <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          value={id}
          onValueChange={setId}
          isInvalid={isInvalidId}
        />
        <div className='flex w-full justify-end md:w-auto'>
          <Button
            color='primary'
            className='w-full sm:w-auto md:flex-shrink-0'
            onClick={addPerson}
            isDisabled={!name || !id || isInvalidId}
          >
            {addPersonText}
          </Button>
        </div>
      </div>
      <div>
        <Table
          hideHeader
          aria-label='List of persons to compare'
          isStriped
          classNames={{ wrapper: 'overflow-x-auto', table: 'min-w-[32rem]' }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent={emptyText}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) =>
                  columnKey === 'actions' ? (
                    <TableCell className='flex justify-end'>
                      <Button
                        isIconOnly
                        variant='light'
                        aria-label='Edit'
                        onPress={() => onOpenEditPerson(onOpen, item)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        isIconOnly
                        variant='light'
                        aria-label='Delete'
                        onClick={() => deleteItem(item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Button
          color='primary'
          className='mt-4 w-full sm:w-auto'
          isDisabled={rows.length < 2}
          onClick={comparePeople}
        >
          {comparePeopleText}
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {nameText}
              </ModalHeader>
              <ModalBody>
                <Input
                  type='text'
                  autoFocus
                  label={nameText}
                  labelPlacement='outside'
                  placeholder='Arthur Dent'
                  startContent={
                    <PersonIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  value={editName}
                  onValueChange={setEditName}
                />
                <Input
                  type='text'
                  label='ID'
                  labelPlacement='outside'
                  placeholder='58a70606a835c400c8b38e84'
                  startContent={
                    <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  value={editId}
                  onValueChange={setEditId}
                  isInvalid={isInvalidEditId}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  {closeText}
                </Button>
                <Button color='primary' onPress={() => editPerson(onClose)}>
                  {saveText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
