import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
  ) {}

  create(createEntryDto: CreateEntryDto) {
    return this.entryRepository.save(createEntryDto);
  }

  findAll() {
    return this.entryRepository.find();
  }

  findOne(id: number) {
    return this.entryRepository.findOneBy({ id });
  }

  update(id: number, updateEntryDto: UpdateEntryDto) {
    return this.entryRepository.update(id, updateEntryDto);
  }

  remove(id: number) {
    return this.entryRepository.delete(id);
  }
}
