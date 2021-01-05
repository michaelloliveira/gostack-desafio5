import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import { number, string } from 'yargs';

interface Request {
  title: string
  value: number
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    // TODO
const {total} = this.transactionsRepository.getBalance();

if(type == 'outcome' && total < value) {
  throw new Error('Saldo não suficiente')
}
    const transaction = this.transactionsRepository.create({title, value, type});

    return transaction;
  }
}

export default CreateTransactionService;
