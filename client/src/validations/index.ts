
export interface ValidationResult {
  valid: boolean;
  err: string;
}

const validateFileType = (event: React.ChangeEvent<HTMLInputElement>, file: any): ValidationResult => {

  let result = { valid: true, err: '' } as ValidationResult;

  if (!file) {
    result = { ...result, valid: false, err: 'No file selected' };
  }

  // list allow file type
  const types = ['video/mp4'];

  if (!types.includes(file.type)) {
    const err = file.type + ' is not a supported type\n';
    result = { ...result, valid: false, err };
    event.target.value = '';
  }
  return result;
}

export {
  validateFileType,
}