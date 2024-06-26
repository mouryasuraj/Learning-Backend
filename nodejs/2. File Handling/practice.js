import {unlink} from 'node:fs/promises'


try {
    await unlink('./temp.txt')
    console.log("Successfully removed the file temp.txt");
} catch (error) {
    console.log("There was an error",error);
}