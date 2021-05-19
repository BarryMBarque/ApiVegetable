interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}
export default {
  driver: `${process.env.MAIL_DRIVER}` || 'ethereal',
  defaults: {
    from: {
      email: 'malickasse58@gmail.com',
      name: 'Barry da Bizon Business',
    },
  },
} as IMailConfig;
