import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [balance, setBalance] = useState(42567.89);
  const [todayEarnings, setTodayEarnings] = useState(1234.56);

  const paymentMethods = [
    { name: 'СБП', icon: 'Zap', color: 'bg-purple-500' },
    { name: 'Сбербанк', icon: 'CreditCard', color: 'bg-green-500' },
    { name: 'Тинькофф', icon: 'Wallet', color: 'bg-yellow-500' },
    { name: 'ЮMoney', icon: 'Coins', color: 'bg-blue-500' },
    { name: 'QIWI', icon: 'CircleDollarSign', color: 'bg-orange-500' },
    { name: 'ВТБ', icon: 'Building2', color: 'bg-cyan-500' },
    { name: 'Яндекс Пай', icon: 'Smartphone', color: 'bg-red-500' },
  ];

  const transactions = [
    { id: 1, type: 'income', amount: 550, method: 'СБП', time: '2 мин назад', status: 'completed' },
    { id: 2, type: 'income', amount: 1200, method: 'Сбербанк', time: '15 мин назад', status: 'completed' },
    { id: 3, type: 'withdrawal', amount: 5000, method: 'Тинькофф', time: '1 час назад', status: 'processing' },
    { id: 4, type: 'income', amount: 750, method: 'ЮMoney', time: '2 часа назад', status: 'completed' },
    { id: 5, type: 'income', amount: 2300, method: 'QIWI', time: '3 часа назад', status: 'completed' },
  ];

  const stats = [
    { label: 'Сегодня', value: `₽${todayEarnings.toLocaleString()}`, icon: 'TrendingUp', color: 'text-green-400' },
    { label: 'Эта неделя', value: '₽8,945', icon: 'Calendar', color: 'text-blue-400' },
    { label: 'Транзакций', value: '247', icon: 'Activity', color: 'text-purple-400' },
    { label: 'Средний чек', value: '₽892', icon: 'DollarSign', color: 'text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow" />
              <Avatar className="h-16 w-16 border-2 border-primary relative z-10">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xl">УП</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-glow">Денежная Кнопка</h1>
              <p className="text-muted-foreground">Твой путь к финансовой свободе</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary hover:glow">
                <Icon name="Settings" size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card/95 backdrop-blur border-primary/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-glow">Настройки профиля</DialogTitle>
                <DialogDescription>Управление аккаунтом и безопасностью</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Email</Label>
                  <Input placeholder="your@email.com" className="mt-2" />
                </div>
                <div>
                  <Label>Двухфакторная аутентификация</Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      <Icon name="Shield" size={14} className="mr-1" />
                      Включена
                    </Badge>
                    <Button variant="ghost" size="sm">Настроить</Button>
                  </div>
                </div>
                <div>
                  <Label>Защита от мошенничества</Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      <Icon name="Lock" size={14} className="mr-1" />
                      Активна
                    </Badge>
                    <Button variant="ghost" size="sm">Подробнее</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-all hover:glow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-card/50`}>
                    <Icon name={stat.icon} size={24} className={stat.color} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 border-primary/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="CircleDollarSign" size={28} className="text-primary" />
                Баланс
              </CardTitle>
              <CardDescription>Доступно для вывода</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-5xl font-bold mb-6 text-glow">
                ₽{balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="h-32 w-32 rounded-full text-2xl font-bold bg-gradient-to-br from-primary via-secondary to-accent hover:scale-110 transition-all duration-300 animate-pulse-glow shadow-2xl"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Sparkles" size={40} />
                      <span>Получить</span>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full h-14 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 glow text-lg font-semibold">
                      <Icon name="ArrowUpRight" size={20} className="mr-2" />
                      Вывести
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card/95 backdrop-blur border-primary/30 max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-glow">Вывод средств</DialogTitle>
                      <DialogDescription>Выберите способ вывода</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label>Сумма вывода</Label>
                        <Input type="number" placeholder="0.00" className="mt-2 text-lg h-12" />
                      </div>
                      <div>
                        <Label className="mb-3 block">Способ вывода</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {paymentMethods.map((method) => (
                            <Button
                              key={method.name}
                              variant="outline"
                              className="h-auto py-4 flex flex-col gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
                            >
                              <div className={`p-2 rounded ${method.color}`}>
                                <Icon name={method.icon} size={20} className="text-white" />
                              </div>
                              <span className="text-xs">{method.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary glow">
                        Подтвердить вывод
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="w-full h-14 border-primary/50 hover:border-primary hover:bg-primary/10 text-lg font-semibold">
                  <Icon name="History" size={20} className="mr-2" />
                  История
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wallet" size={24} className="text-accent" />
                Способы оплаты
              </CardTitle>
              <CardDescription>Принимаем все популярные методы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentMethods.map((method, idx) => (
                  <div
                    key={method.name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:bg-primary/5 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className={`p-2 rounded ${method.color}`}>
                      <Icon name={method.icon} size={18} className="text-white" />
                    </div>
                    <span className="font-medium">{method.name}</span>
                    <Icon name="Check" size={16} className="ml-auto text-green-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="animate-fade-in">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="transactions">
              <Icon name="ArrowLeftRight" size={16} className="mr-2" />
              Транзакции
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Последние операции</CardTitle>
                <CardDescription>История входящих и исходящих платежей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx, idx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:bg-primary/5 animate-slide-in"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${tx.type === 'income' ? 'bg-green-500/20' : 'bg-orange-500/20'}`}>
                          <Icon 
                            name={tx.type === 'income' ? 'ArrowDownRight' : 'ArrowUpRight'} 
                            size={20} 
                            className={tx.type === 'income' ? 'text-green-400' : 'text-orange-400'} 
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{tx.method}</p>
                          <p className="text-sm text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${tx.type === 'income' ? 'text-green-400' : 'text-orange-400'}`}>
                          {tx.type === 'income' ? '+' : '−'}₽{tx.amount}
                        </p>
                        <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                          {tx.status === 'completed' ? 'Завершено' : 'В обработке'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Доход по дням</CardTitle>
                  <CardDescription>Последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, idx) => {
                      const value = Math.random() * 100;
                      return (
                        <div key={day} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{day}</span>
                            <span className="text-sm text-primary font-bold">
                              ₽{(value * 50).toFixed(0)}
                            </span>
                          </div>
                          <Progress value={value} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Популярные методы</CardTitle>
                  <CardDescription>По количеству транзакций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'СБП', value: 45 },
                      { name: 'Сбербанк', value: 32 },
                      { name: 'Тинькофф', value: 28 },
                      { name: 'ЮMoney', value: 18 },
                      { name: 'QIWI', value: 12 },
                    ].map((method, idx) => (
                      <div key={method.name} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{method.name}</span>
                          <span className="text-sm text-accent font-bold">{method.value}%</span>
                        </div>
                        <Progress value={method.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
