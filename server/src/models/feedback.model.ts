import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface FeedbackCreationAttrs {
    name: string,
    email: string,
    message: string
}

@Table({ tableName: 'feedback' })
export class Feedback extends Model<Feedback, FeedbackCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    message: string;
}